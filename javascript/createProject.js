let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();
 const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        return base64;
      };const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            let imageBase64 = await uploadImage(e);
        document.getElementById('formFile').setAttribute('data-image-base64' ,imageBase64);
        document.getElementById('formFile').setAttribute('name',e.target.files[0].name)
        });
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.addEventListener('alignprojectWorkpackages', function(e) {
  const advanceSelect = document.getElementById('ijpri');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignprojectWorkpackages', function(e) {
  const advanceSelect = document.getElementById('i1ybx');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('ihoe6').onclick = (event) => {
    event.preventDefault();
    project['projectTitle'] = document.querySelector("[annotationname = 'projectTitle']").value;project['projectImage'] = {
        data: document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'projectImage']").src,
        name: document.querySelector("[annotationname = 'projectImage']").getAttribute("name")
      };
      project['projectStart'] = document.querySelector("[annotationname = 'projectStart']").value;project['projectEnd'] = document.querySelector("[annotationname = 'projectEnd']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value;project["projectWorkpackages"] = [...document.querySelector("[annotationname = 'projectWorkpackages']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/viewAll/'+response.body.query._id+'' ;}}});};window.onload = () => {};