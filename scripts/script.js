// Fetch JSON and dynamically create divs
fetch('../project-list.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('showcase');

    // Loop through the JSON data
    data.forEach(entry => {
      // Create a div for each entry
      const entryDiv = document.createElement('div');
      entryDiv.className = 'col col-12 col-lg-11 col-xxl-9 card project py-5 pb-xxl-2 my-2 my-xxl-4';

      // Add content to the div
      entryDiv.innerHTML = `
        <div id="${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" class="carousel slide carousel-fade">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>                        
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/${entry.slideA}" alt="${entry.slideA}">
            </div>
            <div class="carousel-item">
                <img src="images/${entry.slideB}" alt="${entry.slideB}">
            </div>
            <div class="carousel-item">
                <img src="images/${entry.slideC}" alt="${entry.slideC}">
            </div>
            <div class="carousel-item">
                <img src="images/${entry.slideD}" alt="${entry.slideD}">
            </div>
            <div class="carousel-item">
                <img src="images/${entry.slideE}" alt="${entry.slideE}">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="row flex flex-column-reverse flex-lg-row justify-content-center align-items-center m-0">
            <div class="col col-1 d-none d-xxl-block"></div>
            <div class="col col-12 p-xxl-5 p-3 col-md-8">
                <h2 class="h1 text-white text-center text-md-start mb-0">${entry.name}</h2>
                <h3 class="h5 text-white-50 text-center text-md-start mb-3">${entry.subtitle}</h3>
                <p class="text-white">${entry.description}</p>
                <a type="button" class="btn btn-lg btn-success d-block d-md-inline-block text-white fw-bold" href="${entry.link}" target="_blank">Download & Play</a>
                <a type="button" class="btn ms-3 btn-lg btn-outline-primary text-primary d-block d-md-inline-block onhovwhite" href="${entry.link}" target="_blank" data-bs-toggle="modal" data-bs-target="#modalFor${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}">Project Breakdown</a>
            </div>
            <div class="col col-1 d-none d-xxl-block"></div>
        </div>
        <div class="modal fade" id="modalFor${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" tabindex="-1" aria-labelledby="#modalFor${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 fw-bold text-center text-white" id="#modalFor${entry.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}">"${entry.name}" Development Process</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">${entry.designprocess}</div>
            </div>
          </div>
        </div>

      `;

      // Append the div to the container
      container.appendChild(entryDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
