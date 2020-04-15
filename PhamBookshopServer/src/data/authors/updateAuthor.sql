UPDATE  [dbo].[author]
SET     [firstname] = @firstname
        , [familyname] = @familyname
WHERE   [autnr] = @autnr

SELECT  *
FROM    [dbo].[author]
WHERE   [autnr] = @autnr