SET IDENTITY_INSERT "author" ON

INSERT INTO  [dbo].[author]
(
    [autnr],
    [firstname],
    [familyname]
)
VALUES
(     
     @autnr,
     @firstname,
     @familyname

)

SELECT  *
FROM    [dbo].[author]
WHERE   [autnr] = @autnr

SET IDENTITY_INSERT "author" OFF