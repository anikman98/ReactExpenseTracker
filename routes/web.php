<?php

use App\Http\Controllers\ExpenseController;
use App\Models\Expense;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function(){
    return redirect()->route('expense.list');
}); 

Route::group(['middleware' => ['auth'], 'prefix' => 'expense'], function() {

    Route::get('/', [ExpenseController::class, 'index'])->name('expense.list');
    Route::get('/add', [ExpenseController::class, 'add'])->name('expense.add');
    Route::post('/store', [ExpenseController::class, 'store'])->name('expense.store');
    Route::get('/show/{expense}', [ExpenseController::class, 'show'])->name('expense.show');
    Route::post('/update', [ExpenseController::class, 'update'])->name('expense.update');
    Route::get('/delete/{expense}', [ExpenseController::class, 'delete'])->name('expense.delete');


});


Auth::routes();



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('check-inertia', function(){
    $expenses = Expense::all();

    return Inertia::render('Home', [
        'expenses' => $expenses,
    ]);
});