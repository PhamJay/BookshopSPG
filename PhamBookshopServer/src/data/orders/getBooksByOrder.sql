select b.isbn, b.autnr, b.title, b.price
from [dbo].[ordercontent] oc
INNER JOIN [dbo].[book] b
  ON oc.isbn = b.[isbn]
WHERE oc.ordernr = @id;
