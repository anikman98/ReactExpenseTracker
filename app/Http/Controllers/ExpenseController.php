<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ExpenseController extends Controller
{

    protected $expenseCategory;
    protected $paymentMethods;
    protected $rules;

    public function __construct()
    {
        $this->expenseCategory = config('expense.expense_category');
        $this->paymentMethods = config('expense.payment_method');
        $this->rules = [
            'description' => ['required', 'min:5'],
            'date' => ['required', 'date'],
            'amount' => ['required', 'min:1'],
            'category' => ['required', Rule::in($this->expenseCategory)],
            'payment_method' => ['required', Rule::in($this->paymentMethods)]
        ];
    }

    public function index(){

        $expenses = Expense::orderByDesc('id')->paginate(5);
        // return view('expenses.index')->with('expenses', $expenses);
        return Inertia::render('Expense/index', [
            'expenses' => $expenses,
        ]);
    }

    public function add(){

        // return Inertia::render('Expense/view/index', [
        //     'expense' => $expe
        // ]);
        return view('expenses.add')
            ->with('expense', new Expense)
            ->with('expense_category', $this->expenseCategory)
            ->with('payment_methods', $this->paymentMethods);
    }

    public function store(Request $request){

        $validatedData = $this->validate($request, $this->rules);
        
        $validatedData['user_id'] = Auth::user()->id;
        
        Expense::create($validatedData);

        return redirect()->route('expense.list');

    }

    public function show(Expense $expense){

        return Inertia::render('Expense/view/index', [
            'expense' => $expense,
            'expenses' => $this->expenseCategory,
            'paymentMethods' => $this->paymentMethods
        ]);
        // return view('expenses.edit')
        //     ->with('expense', $expense)
        //     ->with('expense_category', $this->expenseCategory)
        //     ->with('payment_methods', $this->paymentMethods);
    }

    public function update(Request $request){

        $this->rules['id'] = ['required', 'exists:expenses,id'];
        $validatedData = $this->validate($request, $this->rules);
        
        $expenseId = $validatedData['id'];
        unset($validatedData['id']);

        $action = Expense::where('id', $expenseId)->update($validatedData);

        return redirect()->back();

        if($action == 1){
            return view('expenses.edit')
                ->with('expense', Expense::findOrFail($expenseId))
                ->with('expense_category', $this->expenseCategory)
                ->with('payment_methods', $this->paymentMethods);
        }else{
            return redirect()->route('expenses.show',$expenseId)->withInput($request->input());
        }
    }

    public function delete(Expense $expense){
        if($expense->user_id !== Auth::user()->id){
            abort(401, 'Unable to find this expense!');
        }

        $expense->delete();

        return redirect()->route('expense.list');
    }
}
