import Model from '../models/form.model'

class FormService {
  constructor() {}

  async createGuest(data: any) {
    const guests = new Model(data);
    await guests.save();
    return data;
  }

  async getGuest(){
    const guests = await Model.find();
    return guests;
  }

  async listGuestconfirmed() {
    const guests = await Model.find({
      confirmAssitance: true
    });
    const numberAssistance = guests.length;
    return {
      guestsNumber: numberAssistance,
      list: guests
    };
  }
}

export default FormService;