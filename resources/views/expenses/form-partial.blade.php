<input type="hidden" name="id" id="id" value="{{$expense->id}}">
<div class="mb-3">
    <label for="date" class="form-label">Date</label>
    <input type="date" class="form-control" id="date" name="date" requried value="{{old('date', Carbon\Carbon::parse($expense->date)->format('Y-m-d'))}}">
    <div class="error" style="color: red">
        <small>{{$errors->first('date')}}</small>
    </div>
</div>
<div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" name="description" placeholder="Descritption" value="{{old('description', $expense->description)}}" required>
    <div class="error" style="color: red">
        <small>{{$errors->first('description')}}</small>
    </div>
</div>
<div class="mb-3">
    <label for="amount" class="form-label">Amount</label>
    <input type="number" step=".10" class="form-control" id="amount" name="amount" placeholder="00.00" value="{{old('amount', $expense->amount)}}" required>
    <div class="error" style="color: red">
        <small>{{$errors->first('amount')}}</small>
    </div>
</div>
<div class="mb-3">
    <label for="category" class="form-label">Category</label>
    <select name="category" id="category" class="form-control" requried>
        @foreach($expense_category as $category)
            <option value={{$category}} {{($expense->category === $category) ? "selected" : null}}>{{$category}}</option>
        @endforeach
    </select>
    <div class="error" style="color: red">
        <small>{{$errors->first('category')}}</small>
    </div>
</div>
<div class="mb-3">
    <label for="payment_method" class="form-label">Payment Method</label>
    <select name="payment_method" id="payment_method" class="form-control" required>
        @foreach($payment_methods as $method)
            <option value="{{$method}}" {{($expense->payment_method === $method) ? "selected" : null}}>{{$method}}</option>
        @endforeach
    </select>
    <div class="error" style="color: red">
        <small>{{$errors->first('payment_method')}}</small>
    </div>
</div>
<button type="submit" class="btn btn-success" style="color: black">Submit</button>