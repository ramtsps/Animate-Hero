# Strapi Configuration for Email Field

This guide explains how to add the **Email** field to your **Enrollment** Content Type in the Strapi Admin Panel.

## Prerequisites
- Strapi server must be running (`npm run develop` in the `Backend` folder).
- You must be logged in to the Strapi Admin Panel (usually at `http://localhost:1337/admin`).

## Step-by-Step Instructions

1.  **Navigate to Content-Type Builder**
    - In the left sidebar, click on **Content-Type Builder**.

2.  **Select Enrollment Content Type**
    - Under "Collection Types", verify if "Enrollment" exists.
        - **If it exists:** Click on **Enrollment**.
        - **If it does NOT exist:** Click "Create new collection type", name it `Enrollment`, and continue.

3.  **Add the Email Field**
    - Click the **+ Add another field** button.
    - Select **Email** from the list of field types.
    - In the **Name** field, enter exactly: `email` (all lowercase).
    - Click **Finish**.

4.  **Verify Other Fields**
    - Ensure your Enrollment content type also has the following fields (if you haven't created them yet):
        - `name` (Text, Short Text)
        - `age` (Number or Text)
        - `gender` (Text / Enumeration)
        - `grade` (Text)
        - `parentName` (Text)
        - `address` (Text, Long Text)
        - `phoneNumber` (Text)
        - `hometown` (Text)
        - `interestedInArt` (Text / Boolean / Enum)
        - `previousArtClass` (Text / Boolean / Enum)
        - `photoPermission` (Text / Boolean / Enum)
        - `language` (Text)
        - `zelleTransactionId` (Text, Short Text) - *Optional*
        - `submissionDate` (DateTime)
        - `timeZone` (Text)

5.  **Save Changes**
    - Click the **Save** button in the top right corner.
    - The server will restart automatically.

## Update Permissions

1.  **Navigate to Settings**
    - Go to **Settings** > **Users & Permissions Plugin** > **Roles**.

2.  **Edit Public Role**
    - Click on the **Public** role.

3.  **Enable Permissions**
    - Scroll down to the **Enrollment** permission section.
    - Check the box for **create**.
    - Click **Save** in the top right.

Your Strapi backend is now configured to accept the email field from the frontend form!
