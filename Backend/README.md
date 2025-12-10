# Strapi Backend Setup

The frontend has been configured to send enrollment data to this backend.

## 1. Installation
The Strapi application files are already present. You just need to start the server.

## 2. Configuration
1. Start the server:
   ```bash
   npm run develop
   ```
2. Open [http://localhost:1337/admin](http://localhost:1337/admin) and create your admin account.

## 3. Create Content Type
1. Go to **Content-Type Builder**.
2. Create a new Collection Type named **Enrollment** (Display name: Enrollment).
3. Add the following fields:
   * `name` (Text, Short)
   * `age` (Text, Short) or Number
   * `gender` (Text, Short)
   * `grade` (Text, Short)
   * `parentName` (Text, Short)
   * `address` (Text, Long)
   * `phoneNumber` (Text, Short)
   * `hometown` (Text, Short)
   * `interestedInArt` (Text, Short)
   * `previousArtClass` (Text, Short)
   * `photoPermission` (Text, Short)
   * `language` (Text, Short)
   * `zelleTransactionId` (Text, Short)
   * `submissionDate` (Date/Time)
   * `timeZone` (Text, Short)

## 4. Permissions
1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**.
2. Click on **Public**.
3. Under **Enrollment**, check the **create** box.
4. Click **Save**.

Your frontend at `http://localhost:5173` should now be able to submit enrollments.
