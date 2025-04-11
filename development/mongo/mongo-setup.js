rsconf = {
    _id : "rs-loan-approval",
    members: [
        {
            "_id": 0,
            "host": "loan-approval-mongo:27017",
            "priority": 3
        }
    ]
};

rs.initiate(rsconf);
