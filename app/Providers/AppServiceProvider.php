<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrap();

        Inertia::share('app.name', config('app.name'));

        Inertia::share([
            'errors' => function(){
                return Session::get('errors') ? Session::get('errors')->getBag('default')->getMessages() : (object) [];
            }
        ]);

        Inertia::share('auth.user', function(){
            if(Auth::user()){
                return [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name
                ];
            }
        });
    }
}
