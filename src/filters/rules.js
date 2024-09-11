const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export default {
  required: value => !!value || "Обязательное поле",
  email: value => { return (!value || emailRegex.test(value)) || "Введите валидный E-mail" },
  phoneNumber: value => ( value && value.length === 17) || "Введите валидный номер телефона",
}
