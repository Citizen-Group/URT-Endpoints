# <img src="docs\img\citizen-stripe-logo.png" width="38" style="vertical-align: text-top; margin-right: 3px" alt="Citizen Information Group Stripe Logo">Citizen  `URT Endpoint Template`

Create your own endpoint for _Citizen's Universal Reporting Tool_ by:

Downloading this template and emailing the completed files to control.ottawa via Gmail.com

OR

Cloning this repo, using the template and adding your endpoint to the repo.

Jump to [Making a URT Endpoint](#making-a-urt-endpoint)

## What is the URT?
The **URT** / **Universal Reporting Tool**, is the name of a reporting tool developed by **Citizen Information Group** to provide a truly *universal* way of reporting civic problems. The *Universal* part in its name comes from the ability to report anything*, without having to know: to whom, how/where to report it. You can learn more about it [here]()

## What is an Endpoint?
An **EP**/**Endpoint** within the **URT** ecosystem, is a title used to describe entities (people, businesses ,governments, etc) that provide services though the **URT** to the public. Theses service providers reside logically on the *end point* of the path for sending service requests.

More technically said: *"an endpoint is a remote computing device that communicates back and forth over a network to which is it connected"*.

## How does a Endpoint work?
Every **URT Endpoint** is connected, via the internet, to the **URT Ecosystem**, which is controlled by the central **Universal Reporting Tool Master Server**. The **Master Server**, accessible to the public via a website and privately via API calls, coordinates all the incoming **requests for service** and routes them to the best endpoint to handle the request.

The data provided in a **Endpoint Template** tells the **URT** how to compensate for the uniqueness of each **endpoint**. This means: 
- The Where and how to communicate with this **endpoint**
- What services are provided by this **endpoint**, and under what conditions are these services provided
- How to generate a service request for this **endpoint**, and what special behavior (if any) may need to be preformed before sending (Like: address validation, cross-referencing or user verification/confirmation steps)

This is what allow us to provide a much higher quality of service, over existing systems. Ensuring for both **Endpoint Clients** and **Endpoint Service Providers**, that they spend more time doing whats important to them, get the results they want quickly with the most accurate and standardized information and at the lowest effort/barrier to action and least labour intensive way.

## Features
URT Endpoints where developed to be:
### Human readable
URT Endpoints start and end as JSON. No databases, no binary, no funky text. Just edit between the {} and your on your way.
### Workplace and office friendly
URT Endpoints being essentially plain text, makes it easy to:
- Keep copies
- Track changes across versions
- Collaborate, review, verify and validate amongst stakeholders
- Store, send and collaborate via email, SharePoint and/or any other text medium

**URT Endpoints** were intentionally designed to be simple to distribute, store and review. We understand the complexly that modern bureaucracy brings, and we sought, from the onset, to remove this problem from of our services. This reduces errors, reduces complexly and redundancy.

We want you to have more time to develop and deliver solutions to help others, rather than sinking it into configuring and maintaining your public services. That is why the **URT** was built and that is what we deliver.
  
### Require low technical skills
We want the URT to be accessible to all solution providers, regardless of technical skill. 

We understand not everyone with a compassionate heart and a strong sense of civic duty, is going to be a professional with the latest trends in technology. As such, we made making and maintaining an endpoint simple. All that is required is basic text editing skills and the ability to  navigate websites.

## Making a URT endpoint
You can create a **URT Endpoint** for _Citizen's Universal Reporting Tool_ by:

Downloading this template and emailing the completed files to control.ottawa via Gmail.com. We will review and upload those files to Github on your behalf.

Alternately you can:

1. Clone this repo
2. Use the template
3. Copy the template and complete the information 
4. Add the endpoint's information to the repo
5. Publish your changes via pull request for review

### Next Steps
See [Making a URT Endpoint](docs/making-a-urt-endpoint.md) for step by step information on creating a **URT Endpoint**
See [Information for endpoint administrators](docs/info-for-endpoint-admins.md) for details on administrating your endpoint

# Quick technical information for nerds
- GeoJSON
- EPSG:3857 - WGS 84 / Pseudo-Mercator - Projected
## Backend
- Node/JS + Mongo/Mongoose
- Schema is expanded from the GeoReportsAPI V2 Standards
- Endpoints stored as JSON on the master server
- On server restart they reloaded from JSON and imported into the in-memory database
- Endpoints can be updated after the initial upload via self adminstration webpages for verified EP administrators