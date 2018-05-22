export class Order {
    constructor(
        public sr_no: number,
        public references: String,
        public item_name: String,
        public design_name: String,
        public main_screen: String,
        public packing: String,
        public no_unit: String,
        public pieces: String,
        public cut: String,
        public mts: String,
        public rate: String,
        public amount: String
    ) { }
}

export class OrderModel {
    constructor(
       public serial: number,
       public f_name: String,
       public l_name: String,
       public mobile: String
    ) {
        this.serial = serial;
        this.f_name = f_name;
        this.l_name = l_name;
        this.mobile = mobile;
    }
}
