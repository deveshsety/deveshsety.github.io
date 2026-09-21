# Campaign Response Decision Tree

A CART model ranking 20,000 customers by campaign-response likelihood, tuned on ROC-AUC with lift and cumulative-gains analysis.

## Business Question

Given customer attributes, who is most likely to respond to a marketing campaign -- and how much of the campaign budget can be saved by contacting only the best-scoring customers?

## Results at a Glance

| Metric | Value |
|---|---|
| Data | 20,000 customers, 8 predictors, 8.7% responders |
| Why accuracy is not enough | Predicting "no response" for everyone already scores 90.9% accuracy |
| Final model | Depth-5 tree (26 leaves), tuned by 5-fold CV on ROC-AUC; test AUC 0.767 |
| Targeting power | Top 30% of customers by score capture ~64% of all responders (2.1x lift) |
| Recommendation | Contact only the top 30% to reach ~64% of responders with 70% fewer contacts |

## Key Visuals

The notebook includes:
- **Confusion matrix** at default and custom cutoffs
- **ROC curves** comparing unpruned, hand-pruned, and CV-tuned trees
- **Lift chart** showing response rate by decile
- **Cumulative gains curve** showing capture rate vs. contact share
- **Feature importance** bar chart
- **Decision tree visualization** (top 3 levels)

## Top Customer Profiles

| Profile | Response Rate | Customers |
|---|---|---|
| Holding period <= 10.5, self-employed, SCR > 713.5 | 42% | 313 |
| Holding period <= 10.5, salaried, many credit txns, SCR > 608 | 38% | 206 |
| Holding period <= 10.5, self-employed, SCR <= 713.5, many credit txns | 25% | 203 |

## Tech Stack

- Python, scikit-learn, pandas, matplotlib, seaborn

## How to Run

```bash
pip install numpy pandas matplotlib seaborn scikit-learn
jupyter notebook Campaign_Response_Decision_Tree.ipynb
```

The dataset (`DATASET - Original Copy.csv`) is not included due to confidentiality. Replace with your own marketing campaign data to adapt the model.
