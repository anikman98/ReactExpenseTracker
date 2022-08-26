@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Add Expenses
                    </div>
                    <div class="card-body">
                        <form action={{route('expense.update')}} method="POST">
                            @csrf
                            @include('expenses.form-partial')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection