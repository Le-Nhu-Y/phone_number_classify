function phone_number_classify(phone) {
    let Viettel = [];
    let Mobifone = [];
    let Vinaphone = [];
    for (let i = 0; i < phone.length; i++) {
        if (phone[i].substring(0, 3) === "098") {
            Viettel.push(phone[i])
        } else if (phone[i].substring(0, 3) === "090") {
            Vinaphone.push(phone[i])
        } else {
            Mobifone.push(phone[i])
        }
    }
    console.log("Mobiphone là số : " + Mobifone);
    console.log('Viettel là số: ' + Viettel);
    console.log('Mobiphone là số: ' + Mobifone)
}

phone_number_classify (["091212345", '0986123456', '090123456'])
