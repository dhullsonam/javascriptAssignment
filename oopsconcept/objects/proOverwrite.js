var user = {firstName:'sonam',lastName:'Dhull'};

var access1 = { lastName:'Sinhmar',canView: true};
var access2 = { canWrite: true};

// copy all properties from access1 and access2 to user
Object.assign(user, access1, access2);

console.log(user);

// note: if copied property name already exists,it gets overWriiten



