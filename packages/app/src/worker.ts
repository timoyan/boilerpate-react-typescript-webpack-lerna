const ctx: Worker = self as any;

function reqListener() {
  console.log(this.responseText);
}

// Respond to message from parent thread
ctx.onmessage = ev => {
  let message: string = ev.data;
  const requestObj: XMLHttpRequest = new XMLHttpRequest();
  requestObj.addEventListener("load", reqListener);
  requestObj.open("GET", "http://localhost:8080/flex-layout-sample");
  requestObj.send();

  ctx.postMessage(message);
};
