SELECT  *
FROM    [dbo].[author]
WHERE   [autnr] = @autnr

DELETE [dbo].[author]
WHERE [autnr] = @autnr
