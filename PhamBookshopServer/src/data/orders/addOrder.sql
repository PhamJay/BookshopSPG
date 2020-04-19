INSERT INTO  [dbo].[order]
(
    [username],
    [ordertime],
    [delivery]
)
VALUES
(
     @username,
     @ordertime,
     @delivery

)

SELECT  *
FROM    [dbo].[order]
WHERE   [ordernr] = @ordernr