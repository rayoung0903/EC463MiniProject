
#Create User Login Credential
CREATE TABLE User_Accounts(UID INT(8) NOT NULL AUTO_INCREMENT, Username VARCHAR(100) NOT NULL, Password VARCHAR(128) NOT NULL, CreateDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, LastModified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(UID), UNIQUE(Username), INDEX name(UID, Username, CreateDate, LastModified));



#Create Tempertaure Status
CREATE TABLE User_Temp(UID INT(8) NOT NULL, Temp VARCHAR(128), CreateDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, LastModified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(UID) REFERENCES User_Accounts (UID), INDEX name(UID, Temp, CreateDate, LastModified));