import React from 'react'
import Card from './Card';

const Cardlist =({robot})=>{	

	return (
		<div>
			{	
			robot.map((user,i)=>
				{// {console.log('user ',user)
				//  console.log('Id',i)
					return(
						<Card key={i}
						username={robot[i].username} 
						name= {robot[i].name} 
						email= {robot[i].email}
						/>);
				})
		}
		</div>
	);
			
}

export default Cardlist;











// 	<div>
// 	<Card username= {robots[0].username } name= {robots[0].name} email= {robots[0].email}/>
// 	<Card id= {robots[1].id} name= {robots[1].name} email= {robots[1].email}/>
// 	<Card id= {robots[2].id} name= {robots[2].name} email= {robots[2].email}/>
// 	</div>
// }