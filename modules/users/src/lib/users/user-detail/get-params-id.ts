import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";

export function getParamsId() : Observable<string> {
    const activetedRoute = inject(ActivatedRoute)
    return activetedRoute.params.pipe(
        map(params => params['id'])
    )
}