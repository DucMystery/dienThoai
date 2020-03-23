//Khai Báo lớp Mobile

let Moblie =function (batteryStatus,messageCompose,messageInbox,messageSent,phoneStatus) {
    this.batteryStatus =batteryStatus;
    this.messageCompose = messageCompose;
    this.messageInbox =messageInbox;
    this.messageSent = messageSent;
    this.phoneStatus = phoneStatus;
 //check bật tắt;
    this.checkPhoneStatus = function () {
        if (this.phoneStatus===true)
            return this.phoneStatus;
        return this.phoneStatus;
    }
 //Bật tắt điện thoại
    this.turnMobile =function () {
        if (this.phoneStatus===true)
            this.phoneStatus=false;
        this.phoneStatus=true;
    }
//Xac pin dien thoai
    this.chargePhone = function () {
        for (let i= batteryStatus;i<100;i++){
            batteryStatus++;
        }
        return batteryStatus;
    }
 // Soan tin nhan
    this.texting =function (str) {
     if (this.phoneStatus===true){
         this.messageCompose +=" "+str;
         return this.messageCompose;
     }
    }
//Nhan tin nhan tu mobile khac
    this.getMessageInbox = function (text) {
        if (this.phoneStatus===true){}
        this.messageInbox +=" "+text;
        return this.messageInbox;
    }
// Gui tin nhan toi mobile khac:tin da gui
    this.checkMessageSent = function () {
        if (this.phoneStatus===true){
            batteryStatus+=-1;
            return this.messageSent;
        }
    }
 // kiem tra hop thu den
    this.checkMessageInbox = function () {
        if (this.phoneStatus===true){
            batteryStatus+=-1;
            return this.messageInbox;
        }
    }
    
}

let Nokia = new Moblie(80,'Xin Chao Ban','Ban Khoe khong','Toi van on',true);
let Oppo = new Moblie(80,'leu leu','Ban Khoe ','Toi on',true);
document.write(Nokia.getMessageInbox("hello"));
document.write(Nokia.chargePhone());
document.write(Nokia.turnMobile());
document.write(Nokia.checkPhoneStatus());