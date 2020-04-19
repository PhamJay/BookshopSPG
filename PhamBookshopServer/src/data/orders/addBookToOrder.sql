INSERT INTO  [dbo].[ordercontent]
(
    [ordernr],
    [isbn]
)
VALUES
(
     @ordernr,
     @isbn
)

SELECT  *
FROM    [dbo].[ordercontent]
