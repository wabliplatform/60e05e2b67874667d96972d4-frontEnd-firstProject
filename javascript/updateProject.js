let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';
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
    );document.getElementById('ihoe6').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/updateProject/','');let project = new TempApi.Project();project['projectTitle'] = document.querySelector("[annotationname = 'projectTitle']").value;project['projectImage'] = {
        data: document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'projectImage']").src,
        name: document.querySelector("[annotationname = 'projectImage']").getAttribute("name")
      };project['projectStart'] = document.querySelector("[annotationname = 'projectStart']").value;project['projectEnd'] = document.querySelector("[annotationname = 'projectEnd']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectTitle]').value = response.body.query.projectTitle ;
      if(response.body.query.projectImage !== undefined){

        if(document.querySelector('[annotationname = projectImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = projectImage]').setAttribute('data-image-base64',response.body.query.projectImage.data);
        }
        else{
          document.querySelector('[annotationname = projectImage]').src = response.body.query.projectImage.data;
        }
        document.querySelector('[annotationname = projectImage]').name = response.body.query.projectImage.name;
      }
      document.querySelector('[annotationname = projectStart]').value = response.body.query.projectStart ;document.querySelector('[annotationname = projectEnd]').value = response.body.query.projectEnd ;document.querySelector('[annotationname = projectDescription]').value = response.body.query.projectDescription ;{  location.href= '/viewAll/'+response.body.query._id+'' ;}}});};window.onload = () => {let projectId = window.location.pathname.replace('/updateProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = projectTitle]').value = response.body.query.projectTitle; } catch (e) { console.log(e) };try { 
      if(response.body.query.projectImage !== undefined){
        if(document.querySelector('[annotationname = projectImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = projectImage]').setAttribute('data-image-base64',response.body.query.projectImage.data);
          let fileName = response.body.query.projectImage.name;
          let file = new File([response.body.query.projectImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = projectImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = projectImage]').src = response.body.query.projectImage.data ;
        }
        document.querySelector('[annotationname = projectImage]').name = response.body.query.projectImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectStart]').value = response.body.query.projectStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectEnd]').value = response.body.query.projectEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectDescription]').value = response.body.query.projectDescription; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};