const express = require('express');
import FormService from '../services/service.form';

const router = express.Router();
const service = new FormService();

router.post('/',
  async (req: any, res: any, next: any) => {
  try {
    const data = req.body;
    const guests = await service.createGuest(data);
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

router.get('/',
  async (req: any, res: any, next: any) => {
  try {
    const guests = await service.getGuest();
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

router.get('/guest-assistance',
  async (req: any, res: any, next: any) => {
  try {
    const guests = await service.listGuestconfirmed();
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

export default router;