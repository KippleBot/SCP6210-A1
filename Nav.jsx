import {scp} from './Assignment1'

function Nav(){
    
        return(
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            
                {
                    monsters.map(
                        (monster, index) => (
                        
                            <a className="navbar-link" href="#" key={index} onClick={()=>onSelect(monster)}>{monster.name}</a>
                            
                        )
                    )
                }
            </div>
        </nav>
        );

}
