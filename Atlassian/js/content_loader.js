export function loadData(session) {

    let data = {};

    data.build = session.Items.filter(item => item.Track.Title == "Build");
    data.plan = session.Items.filter(item => item.Track.Title == "Plan");
    data.innovate = session.Items.filter(item => item.Track.Title == "Innovate");
    data.interact = session.Items.filter(item => item.Track.Title == "Interact");
    data.scale = session.Items.filter(item => item.Track.Title == "Scale");
    data.service = session.Items.filter(item => item.Track.Title == "Service");
    data.enhance = session.Items.filter(item => item.Track.Title == "Enhance");
    data.general = session.Items.filter(item => item.Track.Title == "General");

    return data;
}

export function loadSidebar(itemList) {
    $('.items_navigation').html("");
    itemList.forEach( (item, index) => {
        $('.items_navigation').append(
                `<li data-index="${index}">
                    <span class="title">
                        ${item.Title}
                    </span><br>
                    ${item.Speakers[0].FirstName} 
                    ${item.Speakers[0].LastName}, 
                    ${item.Speakers[0].Company}
                </li>`
            );
    });
}

export function loadItem(item) {
    const output = `
        <h1 class="title">${item.Title}</h1>

        <p class="speaker">
            ${item.Speakers[0].FirstName}
            ${item.Speakers[0].LastName},
            ${item.Speakers[0].Company}
        </p>

        <p class="text">${item.Description}</p>

        <h2 class="subtitle">About the Speaker</h2>

        <p class="speaker">
            ${item.Speakers[0].FirstName}
            ${item.Speakers[0].LastName},
            ${item.Speakers[0].Company}
        </p>
    `;

    $('.main').html(output);
}

export function loadContent(list) {
    console.log[list];
    loadSidebar(list);
    loadItem(list[0]);

    $('.items_navigation li').click( event => {
        const index = event.currentTarget.dataset.index;
        loadItem(list[index]);
    });
}