import { Pipe, PipeTransform } from "@angular/core";
import { Institute } from "src/app/shared/academyModel";

@Pipe(
    {
        name:'searchFilter'
    }
)
export class searchFilter implements PipeTransform
{
    transform(value: Institute,search:string):Institute {
        if(value.academyname.toLowerCase().indexOf(search.toLowerCase())!=-1)
        {
            return value;
        }
        else{
            value.academyname=''
            return value;
        }
    }
}