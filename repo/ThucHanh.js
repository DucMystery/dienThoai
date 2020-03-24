let Mobile = function (batery,draf,inbox,sent,status) {
    this.batery = batery;
    this.draf = draf;
    this.inbox = inbox;
    this.status = status;
    this.sent = sent;

    this.power = function () {
        if (this.batery>0){
            this.status = !this.status;
        }else {
            this.status= false;
        }
    }

    this.charge = function () {
        this.batery=100;
        console.log(this.batery);
    }

    this.writeDraf = function (str) {
        if (this.status){
            this.draf =str;
            this.batery--;
        }
    }

    this.sentMess =function (mobile) {
        if (this.status){
            this.sent.push(this.draf);
            mobile.inbox.push(this.draf);
            this.draf = "";
            this.batery--;
        }
    }


}