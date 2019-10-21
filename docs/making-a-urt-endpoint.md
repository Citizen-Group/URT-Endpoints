# <img src="img\citizen-stripe-logo.png" width="38" style="vertical-align: text-top; margin-right: 3px" alt="Citizen Information Group Stripe Logo">Citizen  `URT Endpoint Template`

# Making a URT endpoint
This page will cover how to use the **URT Endpoint Template** to create and submit a new **URT Endpoint**. 

As this is a lengthy process this document will be written in a guide format for ease of reference.

This tutorial expects you have a functioning **GeoReports V2** API server, or at the very least a web route that accepts **GeoReports V2** API formatted messages and responds appropriately. This server or route must be running and accessible via the internet. 

If you wish to get a **GeoReports V2** server or need help configuring your own, please contact us at `control.ottawa via gmail.com`or visit [Getting a GeoReports Server](/getting-a-georeports-server). A non-profit service is provided by **Citizen** to assist less technically minded groups and organizations, to digitalize their social good. 

Without a GeoReports server (or route), you can still configure your services to be handled via email. This will result in reduced functionality and service quality. However, this may be useful for very small organizations that:
- Get very few service requests
- Do not need to or prefers not to provide anything past very basic digital services 
- Primarily have handled everything via email submissions in the past


## Choices
You can create a **URT Endpoint** for _Citizen's Universal Reporting Tool_ by:

- Email
   - Download the template and email the complete files to control.ottawa via Gmail.com
- Github
  1. Clone this repository
  2. Use the template
  3. Copy the template and complete the information 
  4. Add the endpoint's information to the repo
  5. Publish your changes via pull request for review

For the purpose of this guide we will discuss the github process. To use the email process, when done completing the files, skip the upload git publishing and pull request section of this guide.

## Getting Started
In **GIT** parlance to `clone` is to make a copy of a repository (repo). 

> **What is GIT?**
**GIT** is a form of software version control used by software professionals benefit of **GIT** and cloning the repository will ensure your changes are saved, tracked and protected against loss. 

We will use **GIT** and the tool **Tortoise GIT** to make the process easier. 

> Documentation can be found [here](https://tortoisegit.org/docs/tortoisegit/), if at anytime you wish more information about the **Tortoise GIT** process.

### Download and install the tool

At this point please download and install the tool from the following [link](https://tortoisegit.org/download/)


## Clone the repository

To clone the **URT Endpoint Repo**:

1. Navigate to the github root of the project.

    > Currently [https://github.com/Citizen-Group/URT-Endpoints](https://github.com/Citizen-Group/URT-Endpoints)

2. Click on the green button on the right hand side that says `clone or download`.
    2.1. If you are planning to email, you can alternatively download the repo as a **.zip** or **.tar** and skip the remainder of the clone process

3. Click the copy icon to copy the **.git** link
    > Currently `https://github.com/Citizen-Group/URT-Endpoints.git`

4. With the link copied choose a place to clone the repo to.
5. Right click and via the windows context menu choose `Git Clone`
6. The popup window should auto populate with your selected link
    6.1. If not paste it into the top line
7. Click OK
8. Another popup will appear showing the progress of your *clone*
9. When finished you may close the window.
10. The repo has been cloned

> [Related Documentation](https://tortoisegit.org/docs/tortoisegit/tgit-dug-clone.html)

## Copy the template
Once you have a copy of the contents of the repository you will now have access to the template.

1. Navigate to `root -> template` to find the template directory. 
2. Copy the template to a working area or alternatively you may use the template in place if you know how to revert changes in GIT.
   > [Related Documentation](https://tortoisegit.org/docs/tortoisegit/tgit-dug-commit.html#tgit-dug-commit)

## Complete the template
And here comes the fun part. Writing out information in depth to provide your services to general public.

## Committing the Endpoint information to the Repo
When finished:
- Commit
- Push
- Create Pull Request

### Making a pull request
Pull request

## Next steps
- Wait for review
- Learn about adminstration of your account
- Welcome yourself to the family
- Introduce yourself


