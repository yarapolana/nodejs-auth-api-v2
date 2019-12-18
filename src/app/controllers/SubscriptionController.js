import { Op } from 'sequelize';

import User from '../models/User';
import Booking from '../models/Booking';
import Subscription from '../models/Subscription';

import Queue from '../../lib/Queue';

import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Booking,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Booking, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const booking = await Booking.findByPk(req.params.id, {
      include: [User],
    });

    if (booking.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'Unable to subscribe to you own bookings' });
    }

    if (booking.past) {
      return res
        .status(400)
        .json({ error: 'Unable to subscribe to past bookings' });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Booking,
          required: true,
          where: {
            date: booking.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res.status(400).json({
        error: 'Unable to subscribe to two bookings at the same time',
      });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: booking.id,
    });

    await Queue.add(SubscriptionMail.key, {
      booking,
      user,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
