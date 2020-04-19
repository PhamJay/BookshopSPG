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

select *
from [dbo].[order]
where username = @username AND ordertime = @ordertime AND delivery = @delivery
