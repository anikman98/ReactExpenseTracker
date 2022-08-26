@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            Expenses
            <a href={{route('expense.add')}}><button class="btn btn-primary btn-sm float-right">Add new</button></a>
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
                        <td>Actions</td>
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
                            <td>
                                <a href={{route('expense.show', $expense->id)}}> <button class="btn btn-primary btn-sm">Show</button></a>
                                <a href={{route('expense.delete', $expense->id)}}> <button class="btn btn-danger btn-sm">Delete</button></a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $expenses->render() }}            
        </div>
    </div>
</div>
@endsection