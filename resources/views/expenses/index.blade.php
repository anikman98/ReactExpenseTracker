@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            Expenses
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Date</td>
                        <td>Category</td>
                        <td>Description</td>
                        <td>Payment method</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach($expenses as $expense)
                        <tr>
                            <td>{{$expense->id}}</td>
                            <td>{{$expense->date}}</td>
                            <td>{{$expense->category}}</td>
                            <td>{{$expense->description}}</td>
                            <td>{{$expense->payment_method}}</td>
                            <td>{{$expense->amount}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $expenses->render() }}            
        </div>
    </div>
</div>
@endsection