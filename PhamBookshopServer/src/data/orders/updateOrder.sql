UPDATE [dbo].[order]
   SET [username] = @username
      ,[ordertime] = @ordertime
      ,[delivery] = @delivery
WHERE  [ordernr] = @ordernr

SELECT  *
FROM    [dbo].[order]
WHERE   [ordernr] = @ordernr
