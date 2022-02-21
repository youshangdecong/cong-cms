export const rules = {
  name: [
    {
      // type: 'regexp',
      // regexp: /^[a-zA-Z0-9]{4,10}$/,
      pattern: /^[a-zA-Z0-9]{4,10}$/,
      trigger: 'blur',
      message: '请输入4-10位的账号'
    },
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      pattern: /^[a-zA-Z0-9]{4,10}$/,
      trigger: 'blur',
      message: '密码格式不正确',
      required: true
    },
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}
