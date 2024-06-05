module.exports = (mongoose) => {
    const schema = mongoose.Schema(
      {
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
          },
          leave_active: {
            type: Number,
            min: 0
          },
        leave_description: String
      },
      {
        timestamps: true,
      }
    );
  
    return mongoose.model("transaction", schema);
  };