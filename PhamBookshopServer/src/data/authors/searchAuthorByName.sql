select *
from [dbo].[author]
WHERE [firstname] = @name OR [familyname] = @name;