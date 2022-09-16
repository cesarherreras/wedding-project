const express = require('express');
const FormService = require('../services/service.form');

const router = express.Router();
const service = new FormService();

router.post('/',
  async (req, res, next) => {
  try {
    const data = req.body;
    guests = await service.createGuest(data);
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

router.get('/',
  async (req, res, next) => {
  try {
    guests = await service.getGuest();
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

router.get('/guest-assistance',
  async (req, res, next) => {
  try {
    guests = await service.listGuestconfirmed();
    res.json(guests);
  } catch (error) {
    throw new Error('Invalid data');
  }
});

module.exports = router;