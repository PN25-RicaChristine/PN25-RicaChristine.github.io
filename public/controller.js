
//broker

var btnStatus = document.getElementById('status');

//publisher
var btnon = document.getElementById('on');
var btnoff = document.getElementById('off');



var date =new Date();


// basic functionalities
function publishFunc() {
  console.log("Connecting..");
  // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')
  

  client.on("connect", function () {
    console.log("Successfully connected");
    btnoff.disabled = false;
  btnon.disabled = true;
    btnStatus.innerHTML='The device is currently turned on!';
  })
  client.publish('rica/device/status', 'Turned on: '+date)

}


function offFunc() {
  // console.log("publish");
  // client.publish("mqtt/demo", "hello world!");
  client.publish('rica/device/status', 'Turned off: '+date);
  client.end();
  btnoff.disabled = true;
  btnon.disabled = false;
  console.log('Disconnected');
  btnStatus.innerHTML="The device is currently turned off!";
 

  
}





