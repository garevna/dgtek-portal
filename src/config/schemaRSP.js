export const stepsNames = ['Company details', 'General information', 'Technical information', 'Authorization']

export const steps = ['company', 'general', 'technic', 'auth', 'confirm']

export const schema = {
  company: {
    name: {
      title: 'Company name',
      required: true,
      type: 'simple-text',
      value: ''
    },
    abn: {
      title: 'ABN',
      required: true,
      type: 'abn',
      value: ''
    },
    address: {
      title: 'Address',
      required: true,
      type: 'address',
      value: ''
    },
    website: {
      title: 'Website',
      type: 'url',
      value: ''
    },
    primaryContact: {
      title: 'Primary contact',
      required: true,
      type: 'simple-text',
      value: ''
    },
    phoneWork: {
      title: 'Phone (work)',
      required: true,
      type: 'phone',
      value: ''
    },
    phoneMobile: {
      title: 'Phone (mobile)',
      required: true,
      type: 'mobile',
      value: ''
    },
    emailPrimary: {
      title: 'Email (primary)',
      required: true,
      type: 'email',
      value: ''
    },
    emailAlternative: {
      title: 'Email (alternative)',
      type: 'email',
      value: ''
    }
  },
  general: {
    aboutBusiness: {
      title: 'Information about the business',
      type: 'textarea',
      value: ''
    },
    annualRevenue: {
      title: 'Annual revenue',
      type: 'number',
      value: 0
    },
    numberOfCustomers: {
      title: 'Number of customers',
      type: 'number',
      value: 0
    },
    customerAreas: {
      title: 'Areas where the most of customers are located',
      type: 'textarea',
      value: ''
    },
    other: {
      title: 'Other relevant information',
      type: 'textarea',
      value: ''
    }
  },
  technic: {
    info: {
      title: 'Technical information',
      type: 'textarea',
      value: ''
    },
    contact: {
      title: 'Technical contact',
      required: true,
      type: 'simple-text',
      value: ''
    },
    phoneWork: {
      title: 'Phone (work)',
      required: true,
      type: 'phone',
      value: ''
    },
    phoneMobile: {
      title: 'Phone (mobile)',
      required: true,
      type: 'mobile',
      value: ''
    },
    emailPrimary: {
      title: 'Email (primary)',
      required: true,
      type: 'email',
      value: ''
    },
    emailAlternative: {
      title: 'Email (alternative)',
      type: 'email',
      value: ''
    }
  },
  auth: {
    login: {
      title: 'login',
      label: 'Email to sign in',
      required: true,
      type: 'email',
      value: ''
    },
    userName: {
      title: 'User name',
      type: 'simple-text',
      value: ''
    },
    userPhone: {
      title: 'Phone to reset password',
      required: true,
      type: 'mobile',
      value: ''
    },
    password: {
      title: 'Password',
      required: true,
      type: 'password',
      value: ''
    }
  }
}
