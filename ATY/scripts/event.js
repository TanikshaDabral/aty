let container = document.getElementById("container");
//Enter Data in This array

// {
// 	title: "anything",
// 	work: "Work 1",
// 	description: "Description 1",
// 	img: "image link",
//
// },

const data = [
	{
		title: "Whistling Teel",
		work: "",
		link: "https://www.wedmegood.com/profile/Whistling-Teel-16399",
		description:
			"Whistling Teel is a leading event and wedding management company. Based in Mussorie, Uttrakhand, they have offices in Dehradun & Delhi as well. A vision seen by a group of friends teeming with ground-breaking and spanking new ideas along with a determination of making events and parties happen easier and enjoyable for you. ",
		img: "https://cdn0.weddingwire.in/vendor/3699/original/960/jpg/60_15_183699.webp",
	},
	{
		link: "https://www.wedmegood.com/profile/Aura-The-Wedding-Journey-599036",
		title: "Aura - The Wedding Journey",
		work: "",
		description: "Aura The Wedding Journey located in Dehradun is one of the most popular photography ventures specializing in wedding photography. Under the dynamic leadership of Abhinav Sharma, this company is ethics oriented and believes in excellence and dedication. The impeccably talented team believes in progressing and working together",
		img: "https://image.wedmegood.com/resized/800X/uploads/member/599036/1596078760__S7A8715.jpg",
	},
	{
		link: "https://www.bassetteventsinc.com/",
		title: "Bassett Events, Inc.",
		work: "",
		description: "If you are looking for an off-the-charts wedding, high-profile private parties, or charitable events, Bassett Events Inc. is one of the best event management companies for you. The company has over 15 years of experience in the event management field and is well-known for its client-centric services.",
		img: "https://static.wixstatic.com/media/7fa3e0_4497d7f1397d4237a8994c295b926055.jpg/v1/fill/w_1204,h_633,al_c,q_85/7fa3e0_4497d7f1397d4237a8994c295b926055.webp",
	},
	{
		link: "https://davidtutera.com/",
		title: "David Tutera",
		work: "",
		description: "The David Tutera team is a leader in the event industry for over 30 years internationally. Our specialty is creating one-of-a-kind celebrations that truly represent the honoree(s). It is through the details in every aspect of an event; from fine stationery,flowers,visual design,production,entertainment,lighting, to overall",
		img: "https://www.businessapac.com/wp-content/uploads/2021/07/DAVID.jpg",
	},
	{
		link: "https://www.colincowie.com/",
		title: "Colin Cowie",
		work: "Work 2",
		description: "Incepted by Colin Cowie, the company has been providing the highest quality of event management services for 25 years and has transformed the world of weddings, events, and other functions.",
		img: "https://www.businessapac.com/wp-content/uploads/2021/07/COLIN-COWIE.jpg",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
	{
		link: "#",
		title: "Event 2",
		work: "Work 2",
		description: "Description 2",
		img: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	},
];

function generateCard(data) {
	return ` <div class=" border   shadow-lg hover:shadow-xl duration-500 glass w-full md:w-80 lg:w-96">
                      <div class="card text-center"><img class="card-img-top rounded-2xl object-cover" src="${data.img}" alt="${data.title}">
                        <div class="card-body">
                          <h5>${data.title} <br />
                            <span> ${data.work} </span>
                          </h5>
                          <p class="card-text">${data.description} </p>
                        </div>
                        <a class="bg-green-500 p-3 cursor-pointer rounded-xl text-white" href=${data.link}> View More </a>
                      </div>
                    </div>
                    <div>
                    </div>`;
}

function createEvent() {
	for (let i = 0; i < data.length; i++) {
		let listItem = document.createElement("div");
		listItem.innerHTML = generateCard(data[i]);
		listItem.classList.add("w-auto");
		container.appendChild(listItem);
	}
}


createEvent();