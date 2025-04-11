db.createUser({
    user: 'loan-approval',
    pwd: 'loan-approval',
    roles: [
      {
        role:'dbOwner',
        db: 'loan-approval'
      }
    ]
  });
