import axios from "axios";

//Axios instance
const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type':'application/json;charset=utf-8'
    }
});   

async function extract(formData: any) {
    const data  = await api.post('form', formData);
    console.log(data)
    return data;
}

type dataType = {
    name: any,
    lastName: any,
    personsNumber: any,
    comments: any,
    confirmAssitance: any
}

let data: dataType = {
    confirmAssitance: null,
    name: null,
    lastName: null,
    personsNumber: null,
    comments: null
};

confirmAssistance.addEventListener("change", (checkbox: any) => {
    if (checkbox.target.checked) {
        denyAssistance.disabled = true;
        data.confirmAssitance = true;
    } else {
        denyAssistance.disabled = false;
    }
  });

  denyAssistance.addEventListener("change", (checkbox: any) => {
    if (checkbox.target.checked) {
        confirmAssistance.disabled = true;
        data.confirmAssitance = false;
    } else {
        confirmAssistance.disabled = false;
    }
  });

//Extracting data from inputs
formButton.addEventListener('click', async () => {
    const specialChars = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const nameCheck = specialChars.test(formName.value);
    const lastNameCheck = specialChars.test(formLastName.value);


    if(nameCheck || lastNameCheck || formName.value === "" || formLastName.value === "" || personsNumber.value === "") {
        window.alert('Ingrese los datos de forma correcta.');
        return false;
    }
    if(!confirmAssistance.checked && !denyAssistance.checked) {
        window.alert('Por favor seleccione si asistirá o no al evento.');
        return false;
    }

    data = {
        ...data,
        name: formName.value,
        lastName: formLastName.value,
        personsNumber: parseInt(personsNumber.value),
        comments: comments.value,
    }
    await extract(data || {});
    modal.showModal();
});


