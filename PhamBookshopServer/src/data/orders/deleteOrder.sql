SELECT  *
FROM    [dbo].[order]
WHERE   [ordernr] = @ordernr

DELETE [dbo].[order]
WHERE [ordernr] = @ordernr
