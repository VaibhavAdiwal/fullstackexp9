function show(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function runDocker() {
  let status = document.getElementById("dockerStatus");
  status.innerText = "Building image...";

  setTimeout(() => {
    status.innerText = "Running container on port 8080 ✔";
  }, 2000);
}
function runPipeline() {
  let status = document.getElementById("pipelineStatus");

  status.innerText = "Testing...";

  setTimeout(() => {
    status.innerText = "Building Docker image...";
  }, 1000);

  setTimeout(() => {
    status.innerText = "Pushing to registry...";
  }, 2000);

  setTimeout(() => {
    status.innerText = "Deployment successful ✔";
  }, 3000);
}
function deployAWS() {
  let status = document.getElementById("awsStatus");

  status.innerText = "Provisioning EC2...";

  setTimeout(() => {
    status.innerText = "Setting Load Balancer...";
  }, 1000);

  setTimeout(() => {
    status.innerText = "Auto-scaling enabled...";
  }, 2000);

  setTimeout(() => {
    status.innerText = "App deployed across zones ✔";
  }, 3000);
}