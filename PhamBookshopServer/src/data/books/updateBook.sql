UPDATE [dbo].[book]
   SET [isbn] = @isbn
      ,[autnr] = @autnr
      ,[title] = @title
      ,[price] = @price
WHERE  [isbn] = @isbn

SELECT  *
FROM    [dbo].[book]
WHERE   [isbn] = @isbn
