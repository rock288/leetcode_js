select p.product_id,
   round(coalesce(sum(us.units * p.price) / sum(us.units), 0), 2) as  average_price
from Prices p
left join UnitsSold us 
  on us.product_id = p.product_id AND us.purchase_date between p.start_date and p.end_date
group by p.product_id